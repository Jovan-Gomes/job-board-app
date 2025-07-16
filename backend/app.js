require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const jobsRouter = require('./routes/jobs');
const applicationsRouter = require('./routes/applications');

const app = require('express')();
app.use(require('express').json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/jobs', jobsRouter);
app.use('/applications', applicationsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
