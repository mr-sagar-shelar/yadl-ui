import type { Meta, StoryObj } from "@storybook/react";
import EngineeringTeam from "../EngineeringTeam";

const meta: Meta<typeof EngineeringTeam> = { title: "unDraw/EngineeringTeam", component: EngineeringTeam };

export default meta;
type Story = StoryObj<typeof EngineeringTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
