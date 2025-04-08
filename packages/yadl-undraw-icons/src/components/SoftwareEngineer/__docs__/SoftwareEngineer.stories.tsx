import type { Meta, StoryObj } from "@storybook/react";
import SoftwareEngineer from "../SoftwareEngineer";

const meta: Meta<typeof SoftwareEngineer> = { title: "unDraw/SoftwareEngineer", component: SoftwareEngineer };

export default meta;
type Story = StoryObj<typeof SoftwareEngineer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
