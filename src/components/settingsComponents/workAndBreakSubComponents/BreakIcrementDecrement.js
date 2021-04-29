import React from "react";

function BreakIcrementDecrement ({breakLength, setBreakLength, setWorkLength, isOn, isColorFliped, handleIncrement, handleDecrement}) {
  const incrementIcon = isColorFliped 
                      ? <img data-increment="break-increment" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC41MjMgNDkwLjUyMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ4Ny40MTEsMzU1LjA0N0wyNTIuNzQ0LDEyMC4zOGMtNC4xNjUtNC4xNjQtMTAuOTE3LTQuMTY0LTE1LjA4MywwTDIuOTk0LDM1NS4wNDcgIGMtNC4wOTMsNC4yMzctMy45NzYsMTAuOTksMC4yNjIsMTUuMDgzYzQuMTM0LDMuOTkzLDEwLjY4NywzLjk5MywxNC44MjEsMGwyMjcuMTE1LTIyNy4xMTVsMjI3LjExNSwyMjcuMTM2ICBjNC4yMzcsNC4wOTMsMTAuOTksMy45NzYsMTUuMDgzLTAuMjYxYzMuOTkzLTQuMTM0LDMuOTkzLTEwLjY4OCwwLTE0LjgyMUw0ODcuNDExLDM1NS4wNDd6IiBmaWxsPSIjMGRiNTU2IiBkYXRhLW9yaWdpbmFsPSIjZmZjMTA3IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTQ3OS44NTksMzczLjI2NmMtMi44MzEsMC4wMDUtNS41NDgtMS4xMTUtNy41NTItMy4xMTVMMjQ1LjE5MiwxNDMuMDE1TDE4LjA3NywzNzAuMTUxICBjLTQuMjM3LDQuMDkzLTEwLjk5LDMuOTc2LTE1LjA4My0wLjI2MmMtMy45OTMtNC4xMzQtMy45OTMtMTAuNjg3LDAtMTQuODIxbDIzNC42NjctMjM0LjY2N2M0LjE2NS00LjE2NCwxMC45MTctNC4xNjQsMTUuMDgzLDAgIGwyMzQuNjY3LDIzNC42NjdjNC4xNTksNC4xNzIsNC4xNDgsMTAuOTI2LTAuMDI0LDE1LjA4NUM0ODUuMzg4LDM3Mi4xNDYsNDgyLjY4MSwzNzMuMjY1LDQ3OS44NTksMzczLjI2NnoiIGZpbGw9IiMwZGI1NTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                      : <img data-increment="break-increment" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC41MjMgNDkwLjUyMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ4Ny40MTEsMzU1LjA0N0wyNTIuNzQ0LDEyMC4zOGMtNC4xNjUtNC4xNjQtMTAuOTE3LTQuMTY0LTE1LjA4MywwTDIuOTk0LDM1NS4wNDcgIGMtNC4wOTMsNC4yMzctMy45NzYsMTAuOTksMC4yNjIsMTUuMDgzYzQuMTM0LDMuOTkzLDEwLjY4NywzLjk5MywxNC44MjEsMGwyMjcuMTE1LTIyNy4xMTVsMjI3LjExNSwyMjcuMTM2ICBjNC4yMzcsNC4wOTMsMTAuOTksMy45NzYsMTUuMDgzLTAuMjYxYzMuOTkzLTQuMTM0LDMuOTkzLTEwLjY4OCwwLTE0LjgyMUw0ODcuNDExLDM1NS4wNDd6IiBmaWxsPSIjZmYyODI2IiBkYXRhLW9yaWdpbmFsPSIjZmZjMTA3IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTQ3OS44NTksMzczLjI2NmMtMi44MzEsMC4wMDUtNS41NDgtMS4xMTUtNy41NTItMy4xMTVMMjQ1LjE5MiwxNDMuMDE1TDE4LjA3NywzNzAuMTUxICBjLTQuMjM3LDQuMDkzLTEwLjk5LDMuOTc2LTE1LjA4My0wLjI2MmMtMy45OTMtNC4xMzQtMy45OTMtMTAuNjg3LDAtMTQuODIxbDIzNC42NjctMjM0LjY2N2M0LjE2NS00LjE2NCwxMC45MTctNC4xNjQsMTUuMDgzLDAgIGwyMzQuNjY3LDIzNC42NjdjNC4xNTksNC4xNzIsNC4xNDgsMTAuOTI2LTAuMDI0LDE1LjA4NUM0ODUuMzg4LDM3Mi4xNDYsNDgyLjY4MSwzNzMuMjY1LDQ3OS44NTksMzczLjI2NnoiIGZpbGw9IiNmZjI4MjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
  const decrementIcon = isColorFliped 
                      ? <img data-decrement="break-decrement" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42ODggNDkwLjY4OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ3Mi4zMjgsMTIwLjUyOUwyNDUuMjEzLDM0Ny42NjVMMTguMDk4LDEyMC41MjljLTQuMjM3LTQuMDkzLTEwLjk5LTMuOTc1LTE1LjA4MywwLjI2MiAgYy0zLjk5Miw0LjEzNC0zLjk5MiwxMC42ODcsMCwxNC44MmwyMzQuNjY3LDIzNC42NjdjNC4xNjUsNC4xNjQsMTAuOTE3LDQuMTY0LDE1LjA4MywwbDIzNC42NjctMjM0LjY2NyAgYzQuMjM3LTQuMDkzLDQuMzU0LTEwLjg0NSwwLjI2Mi0xNS4wODNjLTQuMDkzLTQuMjM3LTEwLjg0NS00LjM1NC0xNS4wODMtMC4yNjJjLTAuMDg5LDAuMDg2LTAuMTc2LDAuMTczLTAuMjYyLDAuMjYyICBMNDcyLjMyOCwxMjAuNTI5eiIgZmlsbD0iIzBkYjU1NiIgZGF0YS1vcmlnaW5hbD0iI2ZmYzEwNyIgY2xhc3M9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0yNDUuMjEzLDM3My40MTVjLTIuODMxLDAuMDA1LTUuNTQ4LTEuMTE1LTcuNTUyLTMuMTE1TDIuOTk0LDEzNS42MzNjLTQuMDkzLTQuMjM3LTMuOTc1LTEwLjk5LDAuMjYyLTE1LjA4MyAgYzQuMTM0LTMuOTkyLDEwLjY4Ny0zLjk5MiwxNC44MiwwbDIyNy4xMzYsMjI3LjExNWwyMjcuMTE1LTIyNy4xMzZjNC4wOTMtNC4yMzcsMTAuODQ1LTQuMzU0LDE1LjA4My0wLjI2MiAgYzQuMjM3LDQuMDkzLDQuMzU0LDEwLjg0NSwwLjI2MiwxNS4wODNjLTAuMDg2LDAuMDg5LTAuMTczLDAuMTc2LTAuMjYyLDAuMjYyTDI1Mi43NDQsMzcwLjI3OSAgQzI1MC43NDgsMzcyLjI4MSwyNDguMDM5LDM3My40MDgsMjQ1LjIxMywzNzMuNDE1eiIgZmlsbD0iIzBkYjU1NiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
                      : <img data-decrement="break-decrement" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42ODggNDkwLjY4OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ3Mi4zMjgsMTIwLjUyOUwyNDUuMjEzLDM0Ny42NjVMMTguMDk4LDEyMC41MjljLTQuMjM3LTQuMDkzLTEwLjk5LTMuOTc1LTE1LjA4MywwLjI2MiAgYy0zLjk5Miw0LjEzNC0zLjk5MiwxMC42ODcsMCwxNC44MmwyMzQuNjY3LDIzNC42NjdjNC4xNjUsNC4xNjQsMTAuOTE3LDQuMTY0LDE1LjA4MywwbDIzNC42NjctMjM0LjY2NyAgYzQuMjM3LTQuMDkzLDQuMzU0LTEwLjg0NSwwLjI2Mi0xNS4wODNjLTQuMDkzLTQuMjM3LTEwLjg0NS00LjM1NC0xNS4wODMtMC4yNjJjLTAuMDg5LDAuMDg2LTAuMTc2LDAuMTczLTAuMjYyLDAuMjYyICBMNDcyLjMyOCwxMjAuNTI5eiIgZmlsbD0iI2ZmMjgyNiIgZGF0YS1vcmlnaW5hbD0iI2ZmYzEwNyIgY2xhc3M9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0yNDUuMjEzLDM3My40MTVjLTIuODMxLDAuMDA1LTUuNTQ4LTEuMTE1LTcuNTUyLTMuMTE1TDIuOTk0LDEzNS42MzNjLTQuMDkzLTQuMjM3LTMuOTc1LTEwLjk5LDAuMjYyLTE1LjA4MyAgYzQuMTM0LTMuOTkyLDEwLjY4Ny0zLjk5MiwxNC44MiwwbDIyNy4xMzYsMjI3LjExNWwyMjcuMTE1LTIyNy4xMzZjNC4wOTMtNC4yMzcsMTAuODQ1LTQuMzU0LDE1LjA4My0wLjI2MiAgYzQuMjM3LDQuMDkzLDQuMzU0LDEwLjg0NSwwLjI2MiwxNS4wODNjLTAuMDg2LDAuMDg5LTAuMTczLDAuMTc2LTAuMjYyLDAuMjYyTDI1Mi43NDQsMzcwLjI3OSAgQzI1MC43NDgsMzcyLjI4MSwyNDguMDM5LDM3My40MDgsMjQ1LjIxMywzNzMuNDE1eiIgZmlsbD0iI2ZmMjgyNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />

  return (
    <div className="increment-decrement">
      <div className="increment" onClick={(e)=>handleIncrement(e, isOn, setBreakLength, setWorkLength)}>
        {incrementIcon}
      </div>
      <p>{breakLength}</p>  
      <div className="decrement" onClick={(e)=>handleDecrement(e, isOn, setBreakLength, setWorkLength)}>
        {decrementIcon}
      </div>
    </div>
  )
} 

export default BreakIcrementDecrement