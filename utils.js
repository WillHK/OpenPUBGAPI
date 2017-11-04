const catchAsyncErrors = fn => (
  (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => console.log(err));
    }
  }
);

exports.catchAsync = catchAsyncErrors;
