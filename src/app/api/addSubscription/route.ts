// pages/api/subscribe.ts

import { NextApiRequest, NextApiResponse } from 'next';
import SibApiV3Sdk from 'sib-api-v3-typescript';

const apiInstance = new SibApiV3Sdk.ContactsApi();
apiInstance.apiKey = process.env.SENDINBLUE_API_KEY;

const handleSubscribe=async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const createContact = {
    email: email,
    listIds: [process.env.SENDINBLUE_LIST_ID]  // Assuming you have a list to add the contact to
  };

  try {
    const response = await apiInstance.createContact(createContact);    
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error: error.message || "There was an error adding the email. Please try again." });
  }
}
