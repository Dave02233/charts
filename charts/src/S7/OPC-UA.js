const {
    OPCUAClient,
    AttributeIds,
    TimestampsToReturn,
    DataType
} = require("node-opcua");

const endpointUrl = "opc.tcp://192.168.0.1:4840"; // Modifica con l’indirizzo del tuo PLC

async function main() {
    const client = OPCUAClient.create({ endpoint_must_exist: false });
    await client.connect(endpointUrl);

    const session = await client.createSession();

    const nodeId = "ns=2;s=MyRealValue"; // Simbolo definito nel TIA Portal

    const dataValue = await session.read({
        nodeId,
        attributeId: AttributeIds.Value,
        timestampsToReturn: TimestampsToReturn.Neither
    });

    console.log("📈 Valore float simbolico:", dataValue.value.value);

    await session.close();
    await client.disconnect();
}

main().catch((err) => console.error("❌ Errore:", err));