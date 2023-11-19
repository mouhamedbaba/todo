import React from "react";

const Card = ({ cards, task }) => {
    return (
      <>    
      {cards.filter((card) => (
      <div className="kanban-item">
      <div className="card kanban-item-card hover-actions-trigger">
        <div className="card-body">
          <div className="position-relative">
            <div className="dropdown font-sans-serif"><button className="btn btn-sm btn-falcon-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary="viewport" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h" data-fa-transform="shrink-2"></span></button>
              <div className="dropdown-menu dropdown-menu-end py-0"><a className="dropdown-item" href="#!">Add Card</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Copy link</a>
                <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
              </div>
            </div>
          </div>
          <p className="mb-0 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">{card.title} {task}</p>
          <div className="kanban-item-footer cursor-default">
            <div className="text-500 z-index-2"><span className="me-2" data-bs-toggle="tooltip" title="You're assigned in this card"><span className="fas fa-eye"></span></span><span className="me-2" data-bs-toggle="tooltip" title="Checklist"><span class="fas fa-check me-1"></span><span>3/6</span></span></div>
            <div class="z-index-2">
              <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" title="Emma">
                <img class="rounded-circle" src="../assets/img/team/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>))}
</>
    );
};

export default Card;