import React, { useState, useRef, useEffect } from "react";
import Container from "./Container";
// import recordsAPI from "../utils/record/API";
// import exerciseAPI from "../utils/exercise/API";
import workoutAPI from "../utils/workout/API";

function DragNDrop() {
  const data = [
    { title: "Sunday", items: [] },
    { title: "Monday", items: ["1", "2", "3"] },
    { title: "Tuesday", items: ["4", "5"] },
    { title: "Wednesday", items: ["C", "D"] },
    { title: "Thursday", items: ["E", "F"] },
    { title: "Friday", items: ["G", "H"] },
    { title: "Saturday", items: ["I", "J"] },
  ];

  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [hide, setHide] = useState(true);
  // const [exercises, setExercies] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    workoutAPI.getWorkout()
    .then(res => {
      console.log(res.data);
      setWorkouts(res.data);
    })
    .catch(err => console.log(err));
  },[]);

  const handleDragStart = (e, params) => {
    //params are gIndex and iIndex
    console.log("drag starting", params);
    //every time we drag we set dragItem to the params
    dragItem.current = params;
    //dragNode = the current node that we are dragging
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    //asynchronous, when we start dragging it changes to dark background and keeps white background item
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    //for scrolling over other items
    //will fire anytime you drag on top of the other items as well
    //params are now for the item we are dragging over
    console.log("entering drag", params);
    const currentItem = dragItem.current;
    //if the target item is not the same as the item we're dragging
    if (e.target !== dragNode.current) {
      console.log("target not the same");
      setList((oldList) => {
        //make a deep copy of oldlist which is just list from line4
        let newList = JSON.parse(JSON.stringify(oldList));
        //take the 1 st flip with 2 nd, without removing anything in between 0 (1,0,2)
        //removing our currently dragged item, [0] will return that item because only 1 in the list
        newList[params.gIndex].items.splice(
          params.iIndex,
          0,
          newList[currentItem.gIndex].items.splice(currentItem.iIndex, 1)[0]
        );
        //currentItem now became the target item so
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    console.log("end dragging");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    //params gIndex and iIndex from dragging? ternary
    const currentItem = dragItem.current;
    if (
      currentItem.gIndex === params.gIndex &&
      currentItem.iIndex === params.iIndex
    ) {
      return "current dnd-item";
    }
    //want classes current and dnd-item when dragging true, otherwise just dnd-item
    return "dnd-item";
  };

  const handleAdd = () => {
    setHide(!hide);
  }
  // click the add button
  const handleAddWorkout = () => {
    workoutAPI.getWorkout()
    .then(results => {
      console.log(results.data);
      list[0].items.push(results.data[0].name);
      console.log(list[0].items);

      setList([...list]);
    })
    .catch(err => console.log(err));

    console.log("Adding an item");
  };

  const handleAddExercise = (name) => {
    console.log(name);
    list[0].items.push(name);
    setList([...list]);
  };

  return (
    <Container>
      <div className="add-to-calendar">
        <button onClick={handleAdd}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="drag-n-drop">
        {list.map((group, gIndex) => (
          <div
            key={group.title}
            className="dnd-day"
            //for dragging over empty column:
            //if we are dragging and positive number of items in a group. 0 would be false.
            //then we want to handleDragEnter
            //we don't have an item in this case so we can set default of item Index to 0.
            onDragEnter={
              dragging && !group.items.length
                ? (e) => handleDragEnter(e, { gIndex, iIndex: 0 })
                : null
            }
          >
            <div className="dnd-day-title">{group.title}</div>
            {group.items.map((item, iIndex) => (
              <div
                draggable
                onDragStart={(e) => {
                  handleDragStart(e, { gIndex, iIndex });
                }}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { gIndex, iIndex });
                      }
                    : null
                }
                //can't use onDragEnd bc unpredicted behavior and could break things
                key={item}
                className={
                  dragging ? getStyles({ gIndex, iIndex }) : "dnd-item"
                }
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={ hide ? "popup hide" : "popup"}>
        <div>
          <h1>Select a Workout</h1>
          <div className="ex-list">
            {workouts.map((workout) => (
              <div key={workout.id} className="ex-item" name={workout._id} onClick={() => handleAddExercise(workout.name)}>
                {workout.name}: {workout.description}
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddWorkout}>Add workout</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DragNDrop;
