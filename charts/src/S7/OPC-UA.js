const {
    OPCUAClient,
    AttributeIds,
    TimestampsToReturn,
    DataType
} = require("node-opcua");

const endpointUrl = "opc.tcp://192.168.0.1:4840"; // Modifica con l’indirizzo del tuo PLC

async function main() {
    const client = OPCUAClient.create({ endpoint_must_exist:  });
    await client.connect(endpointUrl);



    await session.close();
    await client.disconnect();
}

