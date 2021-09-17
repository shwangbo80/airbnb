import React from 'react';

function MemberPortal() {
  return (
    <li>
      <button className="btn bg-white rounded-pill px-2 py-0 member-border">
        <i className="bi bi-list" style={{ fontSize: '1.2em' }} />
        <i className="bi bi-person-circle ms-2" style={{ fontSize: '1.7em' }} />
      </button>
    </li>
  );
}

export default MemberPortal;
