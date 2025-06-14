import express from "express";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World Anjay');
});

app.post('/users', async (req, res) => {
  const { name, email, nomor_handphone } = req.body;
  const user = await prisma.user.create({
    data: { name, email, nomor_handphone },
  });
  res.json({
    status: 'OK',
    message: 'User created successfully',
    data: user,
  });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({
    status: 'OK',
    message: 'Users fetched successfully',
    data: users,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});