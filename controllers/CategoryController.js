import prisma from "../prisma/prisma.js";
 
// Create - POST
const CategoryCreate = async (req, res) => {
    try {
        const { categoryName, description } = req.body;
        await prisma.category.create({
            data: {
                categoryName,
                description,
            }
        }).then(result => res.status(201).json(result))
          .catch( error => res.status(400).json({ message: error.message }));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

// Read All - GET
const CategoryGetAll = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// Read by id - GET
const CategoryGetById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.findUnique({ where: { categoryId: +id } });
        if (!category) return res.status(404).json({ message: 'Category not found' });
        return res.status(200).json(category);
    }   catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// Update - PUT/ PATCH
const CategoryUpdateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName, description } = req.body;
        await prisma.category.update({ 
            where: { categoryId: +id},
            data: {
                categoryName,
                description,
            }
        })
        .then( result => res.status(200).json(result))
        .catch(error => {
            if (error.code === 'P2025') return res.status(404).json({ message: 'update' });
            return res.status(400).json({ message: error.message })
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Delete - DELETE
const CategoryDeleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.category.delete({ where: { categoryId: +id } })
                    .then( () => res.status(200).json({ message: 'Category deleted successfully'}))
                    .catch(error => {
                        if (error.code === 'P2025') return res.status(404).json({ message: 'ลบไปแล้ว จะลบอีกทำไม' });
                        return res.status(400).json({ message: error.message })
                    });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export { CategoryCreate,CategoryGetAll, CategoryGetById, CategoryUpdateById, CategoryDeleteById, }