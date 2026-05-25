import { useEffect, useState } from "react";

const TODOIST_TOKEN = "14765054988b74d6cae800547fa5231e644de451";

function TasksCard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        fetch("http://localhost:5678/webhook/pulse-tasks")
  .then((res) => res.json())
  .then((data) => {
    const formatted = data.slice(0, 5).map((task) => ({
      task: task.content,
      priority:
        task.priority === 4
          ? "High"
          : task.priority === 3
          ? "Medium"
          : "Low",
    }));

    setTasks(formatted);
  })
  .catch((err) => {
    console.error("Tasks Error:", err);
  })
  .finally(() => {
    setLoading(false);
  });

        const data = await response.json();
        console.log("Todoist Response:", data);

        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((task) => ({
            task: task.content,
            priority:
              task.priority === 4
                ? "High"
                : task.priority === 3
                ? "Medium"
                : "Low",
          }));

          setTasks(formatted);
        }
      } catch (error) {
        console.error("Todoist Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div className="dashboard-card tasks-card">
      <div className="tasks-header">
        <div className="card-title">TASKS & PRIORITIES</div>
        <span className="top-link">Todoist Live</span>
      </div>

      <div className="task-list">
        {loading ? (
          <div style={{ padding: "20px" }}>Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div style={{ padding: "20px" }}>
            No active Todoist tasks
          </div>
        ) : (
          tasks.map((item, index) => (
            <div key={index} className="task-item">
              <div className="task-left">
                <div className="task-checkbox"></div>
                <span>{item.task}</span>
              </div>

              <span
                className={`priority-badge ${item.priority.toLowerCase()}`}
              >
                {item.priority}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TasksCard;