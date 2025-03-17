import click
import readchar

from rich.console import Console
from rich.table import Table
from rich.align import Align
from rich.panel import Panel
from rich.live import Live
from rich.layout import Layout
from rich.text import Text
from rich.highlighter import ReprHighlighter
from rich.prompt import Prompt

from time import sleep



console = Console()



def authenticate(username, password):
    return username == "ad" and password == "123"

@click.command()
@click.option("--username", prompt="Username", help="Enter your username")
@click.option("--password", prompt=True, hide_input=True, confirmation_prompt=False, help="Enter your password")
def main(username, password):
    
    if not authenticate(username, password):
        console.print("[bold red]Invalid credentials![/bold red]")
        return False
    highlighted_ind = 0
    menu_items = ["Add Password", "Edit Passwords", "Exit"]
    websites = ["google.com", "facebook.com", "instagram.com"]
    operations = []
    passwords, hidden = ["1414", "222", "315141"], [True, False, True]
    
    table_rows = []
    for i in range(len(websites)):
        table_rows.append((str(i+1), websites[i], "*" * len(passwords[i]) if hidden[i] else passwords[i]))
    
    layout = Layout(name="root")
    layout.split_row(Layout(name="menu"), Layout(name="table", ratio=4))
    # make_dashboard(layout, highlighted_ind, menu_items, table_rows)
    with Live(make_dashboard(layout, highlighted_ind, menu_items, table_rows), refresh_per_second=10, screen=True) as live:
        while True:
            key = readchar.readkey()
            if key:
                if key == readchar.key.UP:
                    if highlighted_ind > 0:
                        highlighted_ind -= 1
                        live.update(make_dashboard(layout, highlighted_ind, menu_items, table_rows))
                elif key == readchar.key.DOWN:
                    if highlighted_ind < 2:
                        highlighted_ind += 1
                        live.update(make_dashboard(layout, highlighted_ind, menu_items, table_rows))
                elif key == readchar.key.ENTER:
                    if highlighted_ind == 2:
                        break
                    elif highlighted_ind == 0:
                        console.print("Add Password")
                    elif highlighted_ind == 1:
                        console.print("Edit Passwords")

def make_dashboard(layout, highlighted_ind, menu_items, table_rows):    
    menu = ""
    rev = "reverse"
    # for i, option in enumerate(menu_items):
    #     highlight = rev if i == highlighted_ind else "white on black"
    #     menu += f"{i+1}. [{highlight}]{option}[/]\n"
    # layout["menu"].update(Panel(menu, border_style="none"))
    layout["menu"].update(Prompt.ask("", choices=menu_items))
    
    # layout["menu"].update(Panel(
    #     "[bold cyan]1.[/] Add Password\n"
    #     "[bold cyan]2.[/] Edit Passwords\n"
    #     "[bold cyan]3.[/] Exit",
    #     border_style="none"
    # ))
    
    layout["menu"].style = "bold white on black"

    # future api call
    

    table = Table(show_lines=True, header_style="white on blue")
    table.add_column("#", justify="left", no_wrap=True, style="white on blue")
    table.add_column("website",justify="left" , no_wrap=True)
    table.add_column("password", justify="left", no_wrap=True)

    # Add example rows
    for i, website, password in table_rows:
        table.add_row(i, website, password)

    table.expand = True
    layout["table"].update(Panel(table))
    return layout   


if __name__ == "__main__":
    main()
    
    
    