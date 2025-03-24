import type { Meta, StoryObj } from "@storybook/react";
import SelectingTeam from "../SelectingTeam";

const meta: Meta<typeof SelectingTeam> = { title: "unDraw/SelectingTeam", component: SelectingTeam };

export default meta;
type Story = StoryObj<typeof SelectingTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
