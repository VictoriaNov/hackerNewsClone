import React from "react";
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <p>
        Page not found. Go to <Link to='/'>Home</Link>
      </p>
    </div>
  );
}
