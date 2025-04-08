import type { Meta, StoryObj } from "@storybook/react";
import CreationProcess from "../CreationProcess";

const meta: Meta<typeof CreationProcess> = { title: "unDraw/CreationProcess", component: CreationProcess };

export default meta;
type Story = StoryObj<typeof CreationProcess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
