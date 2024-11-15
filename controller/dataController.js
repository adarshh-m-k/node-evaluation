let dataModels = require('../models/dataModels')

module.exports = {

    createData: async (req, res) => {

        let { username, mobile, email } = req.body

        try {

            if (!username || !mobile || !email) {
                return res.status(401).json({ message: 'Please fill all the Detail' })
            }

            let responce = await dataModels.findOne({ email })


            if (!responce) {
                let userData = dataModels.create({
                    username: username,
                    mobile: mobile,
                    email: email
                })
                res.status(200).json({ mesage: "user created successfully " })
            }
            else {
                res.status(401).json({ mesage: "user already exist" })
            }




        } catch (error) {

            console.log(error);
            res.status(500).json({ message: 'user created successfully' })


        }
    }, readData: async (req, res) => {

        try {
            let userList = await dataModels.find()

            if (!userList || userList.length === 0) {
                return res.status(401).json({ message: 'no users found' })
            }

            res.status(200).json({ message: "succsss", data: userList })
        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "An error occurred while fetching the books", error: error.message });



        }
    }, updateData: async (req, res) => {

        let { username, mobile, email } = req.body

        let { id } = req.params

        try {

            let User = await dataModels.findOne({ email: email, _id: { $ne: id } });

            if (User) {
                return res.status(400).json({ message: "Email already exists" });
            }
            let currentUser = await dataModels.findOne({_id: id});

            if (!currentUser) {
                return res.status(404).json({ message: "User not found" });
            }


            if (currentUser.username === username && currentUser.mobile === mobile) {

                return res.status(400).json({ message: "No change were made in username and mobile" });
            }

            let responce = await dataModels.updateOne({ _id: id }, { username, mobile, email })

            res.status(200).json({ mesage: "update succss", data: responce })
        } catch (error) {
            res.status(200).json({ mesage: "update not succss" })

        }


    }, deleteData: async (req, res) => {
        let { id } = req.params

        dataModels.deleteOne({ _id: id }).then((result) => {
            console.log(result);
            res.status(200).json({ message: 'deleted' })

        }).catch((err) => {
            console.log(err);
            res.status(401).json({ message: 'not deleted' })

        })
    }

}