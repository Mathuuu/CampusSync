import ChatModel from '../Models/ChatModel.js'

export const createChat = async(req, res)=> {
    console.log(req.params)
    console.log(req.body)
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    });

    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
};


export const userChats = async (req, res) => {
    // try {
        console.log(req.params);

      const chat = await ChatModel.find({
        members: { $in: [req.params.userId] }, // Assuming req is a member ID
    });
      console.log(chat)
      res.status(200).json(chat);
    // } catch (error) {
    //   res.status(500).json(error);
    // }
  };


export const findChat = async(req, res)=> {
    try {
        const chat = await ChatModel.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}})
        res.status(200).json(chat)  
    } catch (error) {
       res.status(500).json(error) 
    }
}