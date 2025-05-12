import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import mongoClientPromise from "./database/mongoClientPromise";
import { userModel } from "./models/users-model";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise , {databaseName:process.env.ENVIRONMENT}),
  providers: [
    CredentialsProvider({
      credentials:{
        email:{} ,
        password:{}
      },
      async  authorize( credentials){
          if(!credentials) return null ;

          try{
            const user = await userModel.findOne({email:credentials?.email})

            if(user){
               const isMatch = user.email === credentials.email
               if(isMatch){
                return user ;
               }else{
                 throw new Error("user email or password does not match")
               }
            }else{
               throw new Error("user not found")
            }

          }catch(error){
            throw new Error(error)
          }
      }
    }), 
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
