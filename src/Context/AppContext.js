import { createContext, useEffect, useReducer } from "react";
import uuid from "react-uuid";

const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case "ADD_BUDGET":
			return {
				...state,
				budget: Number(state.budget) + Number(action.payload),
			};
		case "ADD_INCOME":
			return {
				...state,
				incomes: [...state.incomes, action.payload],
			};
		case "CLEAR_ALL_TRANSACTIONS":
			return {
				...state,
				expenses: [],
				incomes: [],
			};
		default:
			return state;
	}
};

const initialState = {
	budget: JSON.parse(localStorage.getItem("budget")) || 0,
	incomes: JSON.parse(localStorage.getItem("incomes")) || [],
	expenses: JSON.parse(localStorage.getItem("expenses")) || [],
	categories: [
		"General",
		"Fuel",
		"Grocery",
		"Transport",
		"Fun",
		"Shopping",
		"Travel",
		"Food",
	],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem("budget", JSON.stringify(state.budget));
		localStorage.setItem("expenses", JSON.stringify(state.expenses));
		localStorage.setItem("incomes", JSON.stringify(state.incomes));
	});

	function addBudget(income) {
		dispatch({
			type: "ADD_BUDGET",
			payload: Number(income),
		});
		dispatch({
			type: "ADD_INCOME",
			payload: {
				id: uuid(),
				amount: Number(income),
				category: "Income",
				date: new Date().toISOString().slice(0, 10),
				dateAdded: String(new Date()),
			},
		});
	}
	function addExpense(expense) {
		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	}
	function clearAllTransactions() {
		dispatch({
			type: "CLEAR_ALL_TRANSACTIONS",
		});
	}

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				incomes: state.incomes,
				expenses: state.expenses,
				categories: state.categories,
				addBudget,
				addExpense,
				clearAllTransactions,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
