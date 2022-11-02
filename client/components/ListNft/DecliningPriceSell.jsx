import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "Yup";
const DecliningPriceSell = () => {
	const formik = useFormik({
		initialValues: {
			startingPrice: "",
			endingPrice: "",
			startDate: "",
			endDate: "",

		},
		onSubmit: (values) => {
			//TODO: submit the form
			console.log(values);
		},
		validationSchema: yup.object({
			startingPrice: yup.number().required("Starting price is required").positive("Starting price must be positive"),
			endingPrice: yup.number().required("Ending price is required").positive("Ending price must be positive").lessThan(yup.ref("startingPrice"), "Ending price must be less than starting price"),
			startDate: yup.date().required("Start date is required"),
			endDate: yup.date().required("End date is required").min(yup.ref("startDate"), "End date must be after start date"),
		}),

	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="text-xl mx-2 mt-5 font-mono tracking-tight text-bold dark:text-white">
				Starting Price
			</div>
			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center mx-4 ">
					<div className="w-full h-20 flex justify-aroundr items-center transform   rounded-lg shadow-sm shadow-cyan-500/50">
						<div className="m-5">
							<Image
								src="/icon-192x192.png"
								alt="me"
								width="30"
								height="30"
							/>
						</div>

						<p className="text-xl ml-20 font-mono tracking-tight text-slate-500 dark:text-white">
							ETH
						</p>
					</div>
				</div>

				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="number"
							name="startingPrice"
							id="startingPrice"
							placeholder="Amount"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.startingPrice}
						/>
					</div>
					{formik.touched.startingPrice && formik.errors.startingPrice ? <p className="text-red-600">{formik.errors.startingPrice}</p> : null}
				</div>
			</div>

			<div className="text-xl mx-2 mt-5 font-mono tracking-tight text-bold dark:text-white">
				Duration
			</div>

			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="date"
							name="startDate"
							id="startDate"
							placeholder="Start Date"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.startDate}
						/>

					</div>
					{formik.touched.startDate && formik.errors.startDate ? <p className="text-red-600">{formik.errors.startDate}</p> : null}
				</div>

				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="date"
							name="endDate"
							id="endDate"
							placeholder="End Date"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.endDate}
						/>
					</div>
					{formik.touched.endDate && formik.errors.endDate ? <p className="text-red-600">{formik.errors.endDate}</p> : null}
				</div>
			</div>

			<div className="text-xl mx-2 mt-5 font-mono tracking-tight text-bold dark:text-white">
				Ending Price
			</div>
			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center mx-4 ">
					<div className="w-full h-20 flex justify-aroundr items-center transform   rounded-lg shadow-sm shadow-cyan-500/50">
						<div className="m-5">
							<Image
								src="/icon-192x192.png"
								alt="me"
								width="30"
								height="30"
							/>
						</div>

						<p className="text-xl ml-20 font-mono tracking-tight text-slate-500 dark:text-white">
							ETH
						</p>
					</div>
				</div>

				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="number"
							name="endingPrice"
							id="endingPrice"
							placeholder="Amount"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.endingPrice}
						/>
					</div>
					{formik.touched.endingPrice && formik.errors.endingPrice ? <p className="text-red-600">{formik.errors.endingPrice}</p> : null}
				</div>
			</div>
			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center m-1">
					<button
						type="submit"
						className="break-inside bg-green-600 rounded-full px-8 py-4 mb-4 w-full hover:bg-green-700 transition ease-in-out duration-150"
					>
						<div className="flex items-center justify-between flex-1">
							<span className="text-lg font-medium text-white">
								Complete Listing
							</span>
						</div>
					</button>
				</div>
			</div>

		</form>
	);
};

export default DecliningPriceSell;
