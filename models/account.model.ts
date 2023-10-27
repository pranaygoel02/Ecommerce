import { Schema, model, models } from "mongoose";

const AccountSchema = new Schema({
    userId: String,
    type: String,
    provider: String,
    providerAccountId: String,
    refreshToken: String,
    accessToken: String,
    accessTokenExpires: Date,
    tokenType: String,
    scope: String,
    idToken: String,
    sessionState: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        $cascadeDelete: true
    }
  },{ timestamps: true }
);

const Account = models.Account || model("Account", AccountSchema);

export default Account;