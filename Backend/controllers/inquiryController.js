const Inquiry = require('../models/Inquiry');

const createInquiry = async (req, res) => {
    
    try{
        const inquiry = new Inquiry(req.body);
        const saved = await inquiry.save();
        res.status(201).json({message : 'Inquiry created successfully', data: saved});
    }catch(error){
        console.error('Error creating inquiry:', error);
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
}

const getallInquiries = async (req,res) => {


    try{    
        const inquiries  = await Inquiry.find().sort({createdAt: -1});
        res.status(200).json(inquiries)
    }catch(error){

        console.error('Error fetching inquiries:', error);
        res.status(500).json({ error: 'Failed to fetch inquiries' });

    }



}






module.exports = {
    createInquiry,
    getallInquiries
};