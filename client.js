var PROTO_PATH = __dirname + '/myhello.proto'

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

var myhello_proto = grpc.loadPackageDefinition(packageDefinition).protos;
//console.log(myhello_proto.TwoNumRequest)

const RPC_ENDPOINT = "localhost:23333"
var client = new myhello_proto.Calculate(RPC_ENDPOINT,
    grpc.credentials.createInsecure());

//console.log(myhello_proto.TwoNumRequest)
//   ../Calculate/Add Post 
// import {zecrey} from "zecrey.js"
// zecrey.rpc.
console.log(client)

client.Add({ name: "1",
    a: 10, 
    b: 15}, function(err, resp){
        if (err) console.log('Add err:', err);
        else console.log('Add resp:', resp);
})



