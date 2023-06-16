import React, { useEffect, useState } from "react";

export const ModalEditTask = ({
  isVisible,
  onClose,
  onEdit,
  categories,
  data,
}: {
  isVisible: boolean;
  onClose: () => void;
  onEdit: (taskName: string, description: string, category: string) => void;
  categories: string[];
  data:any;
}) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [suggestCategories, setSuggestCategories] = useState<string[]>([]);
  
  useEffect (() => {
    console.log('abc')
    if (isVisible){
        setTaskName(data.name)
        setDescription(data.description)
        setCategory(data.category)
        console.log(data)
    }
    },[isVisible]

  )
  // const suggestPanelRef = useRef<any>();

  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     console.log(suggestPanelRef.current)
  //     if (
  //       suggestPanelRef.current &&
  //       !suggestPanelRef.current.contains(event.target)
  //     ) {
  //       setSuggestCategories([]);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);

  const _onChangeCategoryInput = (e: any) => {
    const { value } = e.target;
    setCategory(value);

    const newSuggestCategories = categories.filter((item) =>
      item.includes(value)
    );
    setSuggestCategories(newSuggestCategories);
  };

  const _onEdit = () => {
    onEdit(taskName, description, category);
    onClose();
    setTaskName("");
    setDescription("");
    setCategory("");
  };

  if (!isVisible) return null;
  return (
    <div className="fixed top-0 h-screen w-screen bg-black/80 flex flex-col items-center justify-center">
      <div className="w-96 flex flex-col bg-white rounded-lg p-5">
        <div className="text-2xl font-medium text-center">Edit task</div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Task name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-2 mb-4 form-group">
          <label className="block font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-2 mb-4 form-group">
          <label className="block font-bold mb-2">Category</label>
          <div className="flex relative">
            <input
              type="text"
              value={category}
              onChange={_onChangeCategoryInput}
              onFocus={() => {
                const a = categories.filter((item) => item.includes(category));
                setSuggestCategories(a);
              }}
              onBlur={(e) => {
                // console.log(e.relatedTarget?.classList)
                if (
                  !e.relatedTarget ||
                  !e.relatedTarget.classList.contains("category-item")
                  // click vô bất kỳ đâu trừ thằng category list thì set suggesst...  sẽ rỗng
                ) {
                  setSuggestCategories([]);
                }
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {suggestCategories?.length ? (
              <div
                // ref={suggestPanelRef}
                className="absolute top-10 w-full bg-white shadow flex flex-col"
              >
                {suggestCategories.map((category) => (
                  <button
                    key={category}
                    className="category-item px-3 py-2 text-left hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setCategory(category);
                      setSuggestCategories([]);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <BottomButtonRow onCancel={onClose} onEdit={_onEdit} />
      </div>
    </div>
  );
};

const BottomButtonRow = ({
  onEdit,
  onCancel,
}: {
  onEdit: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onEdit}
      >
        Edit
      </button>
      <div className="header-container test text-center"
      onClick={() => {
        onCancel();
      }}
      >
        <div className="header-container test text-center"
        onClick={(e) => {
          e.stopPropagation();
        }}    
        >
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          onCancel();
        }} 
      > 
        Cancel
      </button> */}

    </div>
  );
};
