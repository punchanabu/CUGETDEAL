export const getUserId = (req, res) => {
    const userId = req.authData.id;
    res.json({ userId });
}