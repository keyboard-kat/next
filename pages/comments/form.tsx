type CommentFormProps = {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formVals: any;
  setFormVals: Function;
};

export default function CommentForm({ onSubmit, setFormVals, formVals }: CommentFormProps) {
  return (
    <form onSubmit={onSubmit} className="px-8 py-5 bg-indigo-100  ">
      <div className="py-1 ">
        <label className="">Name</label>
        <input
          value={formVals.name}
          className="flex w-full h-9 p-1 rounded resize-y placeholder-gray-500
         focus:outline-offset-1 focus:outline-1 focus:outline-indigo-400"
          onChange={(e) => setFormVals({ ...formVals, name: e.target.value })}
        />
      </div>
      <div className="py-1">
        <label>Comment</label>
        <textarea
          value={formVals.comment}
          className="flex w-full max-h-16 p-1 rounded resize-y placeholder-gray-500
          focus:outline-offset-1 focus:outline-1 focus:outline-indigo-400"
          onChange={(e) => setFormVals({ ...formVals, comment: e.target.value })}
        />
      </div>

      <div className="flex items-center mt-4">
        <button
          type="submit"
          disabled={!formVals.name || !formVals.comment}
          className="btn btn-primary text-white max-h-8
                "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
