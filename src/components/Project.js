import { House, Heart, Image } from "react-bootstrap-icons";
import "./Projectspage.css";
function Project() {
    return (
        <div id="Projects">
           
            <h3 class="text-center mt-5">Projects</h3>
            <div class="row mx-5 mt-5">
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 bg-light">
                        <div class="card-img mt-2"><House size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Hospital Page </h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">Built a fully responsive website using HTML, CSS , JavaScript, PHP for a Hospital which can accept responses and stores it in database.</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 bg-light">
                        <div class="card-img mt-2"><Heart size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Heart Disease Prediction using Machine Learning Algorithms </h3>
                            <p className="card-text">Worked on analyzing the performance of different machine learning algorithms like decision trees, random forests,SVM etc., for predicting the heart disease.</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 bg-light">
                        <div class="card-img mt-2"><Image size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Health Care Chatbot using Machine learning Techniques </h3>
                            <p className="card-text">Built a model with a team of three members,create a conversational agent that can engage in 
meaningful conversations, exhibiting a high level of understanding, 
empathy, and accuracy, while continuously learning from user 
interactions to improve its performance over time using feed forward neural network,LSTM,BiLSTM  </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Project;
