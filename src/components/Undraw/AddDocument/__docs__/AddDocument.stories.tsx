import type { Meta, StoryObj } from "@storybook/react";
import AddDocument from "../AddDocument";

const meta: Meta<typeof AddDocument> = { title: "unDraw/AddDocument", component: AddDocument };

export default meta;
type Story = StoryObj<typeof AddDocument>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
