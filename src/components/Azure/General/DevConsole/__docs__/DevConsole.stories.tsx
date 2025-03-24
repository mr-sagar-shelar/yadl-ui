import type { Meta, StoryObj } from "@storybook/react";
import DevConsole from "../DevConsole";

const meta: Meta<typeof DevConsole> = { title: "Azure/General/DevConsole", component: DevConsole };

export default meta;
type Story = StoryObj<typeof DevConsole>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
