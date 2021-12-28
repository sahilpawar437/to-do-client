function ToDoList({ collapse, heading}) {
  return (
    <div className="col-md-4">
      <div className="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id={heading}>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapse}`} aria-expanded="true" aria-controls={collapse}>
              Accordion Item #1
            </button>
          </h2>
          <div id={collapse} class="accordion-collapse collapse show" aria-labelledby={heading} data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  First checkbox
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  Second checkbox
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  Third checkbox
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  Fourth checkbox
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  Fifth checkbox
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoList;
