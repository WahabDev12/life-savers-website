from flask import Flask,render_template,url_for,request,redirect,flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager,UserMixin
from flask_login import login_required,logout_user,login_user,current_user
from werkzeug.security import generate_password_hash, check_password_hash



app = Flask(__name__)
db = SQLAlchemy(app)

# SQLALCHEMY CONFIG
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SECRET_KEY"] = "LiveSavers123"


# FLASK LOGIN CONFIG
login_manager = LoginManager()
login_manager.login_view = 'users.login'
login_manager.login_message_category = 'info'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# USER SCHEMA
class User(UserMixin,db.Model):
    id  = db.Column(db.Integer,primary_key = True)
    username = db.Column(db.String(200),nullable = False)
    email = db.Column(db.String(200), nullable = False)
    password = db.Column(db.String(100), nullable = False)

def __repr__(self):
    return '<User %r>' % self.username


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register",methods=["POST","GET"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["username"]
        hashed_password = generate_password_hash(password,method="sha1")
        new_user = User(username=username, email=email, password=hashed_password)
        # ADD USER TO DATABASE
        db.session.add(new_user)
        db.session.commit()


    return render_template("index.html")




@app.route("/login",methods=["POST","GET"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["username"]
        user = User.query.filter_by(email= email).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember= True)   
                return redirect(url_for('users.dashboard'))
        else:
            flash("Invalid username or password", "danger")

    return render_template('login.html', user = user)



# DASHBOARD ROUTE
@login_required
@app.route("/dashboard",methods=["POST","GET"])
def dashboard():
    return render_template("dashboard.html")



@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('/'))

if __name__ == "__main__":
    app.run(debug = True)
