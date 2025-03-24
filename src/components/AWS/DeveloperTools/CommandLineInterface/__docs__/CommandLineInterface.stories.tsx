import type { Meta, StoryObj } from "@storybook/react";
import CommandLineInterface from "../CommandLineInterface";

const meta: Meta<typeof CommandLineInterface> = { title: "AWS/DeveloperTools/CommandLineInterface", component: CommandLineInterface };

export default meta;
type Story = StoryObj<typeof CommandLineInterface>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
