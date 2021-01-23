import dotenv from 'dotenv';
dotenv.config();
export const commonParameters = {
    'AccessKey' : process.env.AMZPAAPIACCESSKEY,
    'SecretKey' : process.env.AMZPAAPISECRETKEY,
    'PartnerTag' : process.env.AMZPAAPIPARTNERTAG, // yourtag-20
    'PartnerType': process.env.AMZPAAPIPARTNERTYPE,
    'Host' : process.env.AMZPAAPIHOST,
    'Region' : process.env.AMZPAAPIREGION,
    'Marketplace': process.env.AMZPAAPIMARKETPLACE // Optional. Default value is US.
}
