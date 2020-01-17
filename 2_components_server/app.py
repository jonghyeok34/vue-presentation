from flask import Flask, render_template, jsonify
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)

@app.route("/jinja")
def test():
    return render_template('jinja_html.html',
                           Fruit={"Apples": 25, "Oranges": 10},
                           Veggies={"Beets": 0, "Carrats": 10}
                           )


@app.route('/fruits_veggies')
def get_fruit_veggies():
    return jsonify(Fruit={"Apples": 25, "Oranges": 10},
                   Veggies={"Beets": 0, "Carrats": 10})


if __name__ == '__main__':
    app.run()
