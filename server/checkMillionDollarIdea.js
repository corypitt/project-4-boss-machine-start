const checkMillionDollarIdea = (req,res, next) => {
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;
    const revSum = Number(numWeeks) * Number(weeklyRevenue);

    if (!numWeeks || !weeklyRevenue || isNaN(revSum) || revSum < 1000000) {
        res.status(400).send("Doesn't add up");
    } else {
        next();
    }
};




// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
