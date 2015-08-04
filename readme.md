## jQuery Earnings Calculator

***This repo contains our solution to the following exercise:***

### Quick Start

1. Create a new project folder called "js-earnings-calculator".
1. CD into the project folder.
1. Generate a project boilerplate:

  ```sh
  yo galvanize-html
  Welcome to Galvanize's HTML Generator
  ? Bootstrap? Yes
  ? jQuery? Yes
  ? Underscore? No
  ? Jasmine tests? Yes
     create index.html
     create css/main.css
     create js/main.js
     create spec/spec.js
     create spec/support/jasmine.json
  ```
1. Add a file called *utility.js* to the "js" folder.
1. Update *index.html*:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Earnings Calculator!</title>
      <!-- stylesheets -->
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="css/main.css">
    </head>
    <body>

      <div class="container">

        <h1 class="text-center">Earnings Calculator<br><span class="small">Powered by Galvanize</span></h1>

        <hr><br>

        <!-- user inputs -->
        <div class="row">
          <div class="col-sm-3 col-sm-offset-1 box">
            <h2>Meal Details</h2>
            <br>
            <form name="mealForm">
              <div class="form-group">
                <input class="form-input" type="number" placeholder="Meal price..." name="meal-price" min="0" step=".01" required>
              </div>
              <div class="form-group">
                <input class="form-input" type="number" placeholder="Tax rate... "name="meal-taxrate" min="0" max="100" step=".01" required>
              </div>
              <div class="form-group">
                <input class="form-input" type="number" placeholder="Tip percentage..." name="meal-tiprate" min="0" max="100" step=".01" required>
              </div>
              <input class="btn btn-default btn-sm" type="submit" value="Submit">
              <input class="btn btn-default btn-sm" type="button" value="Clear">
              <br><br>
            </form>
            <br>
          </div>

          <!-- summary -->
          <div class="col-sm-6 col-sm-offset-1">
            <div class="row">
              <div class="col-sm-6">
                <!-- customer totals -->
                <h2 class="text-center">Total Charges<br><span class="small">Charge per customer</span></h2>
                <div class="totals">
                  <p>Subtotal:</p>
                  <p>Tip:</p>
                  <p>Total:</p>
                </div>
              </div>
              <div class="col-sm-6">
                <!-- all totals -->
                <h2 class="text-center">Total Earnings<br><span class="small">Running totals</span></h2>
                <div class="totals">
                  <p>Total Tips:</p>
                  <p>Meal count:</p>
                  <p>Average tip:</p>
                </div>
                <div class="text-center">
                  <input class="btn btn-default btn-sm" type="button" value="Reset">
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- scripts -->
      <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="js/utility.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
    </body>
  </html>
  ```
1. Update *main.css*:
  ```css
  .form-input {
    min-width: 200px;
  }

  .box {
    border-right: 1px solid #eee;
    padding: 5px;
    text-align: center;
  }

  .totals {
    padding: 10px 0;
  }

  .totals > p {
    font-weight: bold;
  }
  ```
1. Initialize a local git repo. Add/Commit your code locally. Create a remote project/repo on Github. Push code to Github.
1. Wait for instructions...

### Steps

