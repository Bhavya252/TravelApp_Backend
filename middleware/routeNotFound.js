const routeNotFound = (req, res) => {
    res.status(404).json({message: "route not found"});
}

export default routeNotFound;