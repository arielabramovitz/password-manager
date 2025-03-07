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
    
    layout = Layout(name="root")
    layout.split_row(Layout(name="menu"), Layout(name="table", ratio=4))
    make_dashboard(layout)
    with Live(layout, refresh_per_second=4, screen=True) as live:
        while True:
            pass

def make_dashboard(layout, highlighted_ind=0):    
    
    
    layout["menu"].update(Panel(
        "[bold cyan]1.[/] Add password\n"
        "[bold cyan]2.[/] Remove Password\n"
        "[bold cyan]3.[/] Exit",
        border_style="none"
    ))

    websites = ["google.com", "facebook.com", "instagram.com"]
    passwords, hidden = ["1414", "222", "315141"], [True, False, True]
    # Create a table
    table = Table()
    table.add_column("#", justify="left", no_wrap=True)
    table.add_column("website",justify="left" , no_wrap=True)
    table.add_column("password", justify="left", no_wrap=True)

    # Add example rows
    for i in range(1, len(passwords)+1):
        pw = "*" * len(passwords[i-1]) if hidden[i-1] else passwords[i-1]
        
        table.add_row(str(i), websites[i-1], pw)

    table.expand = True
    layout["table"].update(Panel(table))


if __name__ == "__main__":
    main()
    
    
    