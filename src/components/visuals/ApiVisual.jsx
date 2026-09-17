// A simplified illustration of a request to the Task Manager API.
export default function ApiVisual() {
  return (
    <div className="api-window" role="img" aria-label="Example request and JSON response from the Task Manager API">
      <div className="api-request">
        <span className="api-method">GET</span>
        <span>/tasks?completed=false</span>
        <span className="api-status">200 OK</span>
      </div>
      <pre className="api-response">{`[
  {
    "id": 42,
    "title": "Study for AWS exam",
    "completed": false,
    "category": {
      "id": 3,
      "name": "University"
    }
  }
]`}</pre>
    </div>
  )
}
