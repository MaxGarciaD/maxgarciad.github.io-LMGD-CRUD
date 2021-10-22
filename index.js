<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-body">
              <form id="task-form">
                <div class="form-group">
                  <input
                    type="text"
                    id="task-title"
                    class="form-control"
                    placeholder="Task Title"
                    autofocus
                  />
                </div>
                <div class="form-group">
                  <textarea
                    id="task-description"
                    rows="3"
                    class="form-control"
                    placeholder="Task Description"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  id="btn-task-form"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script type="module" src="main.js"></script>
    <script type="module" src="index.js"></script>
  </body>
</html>