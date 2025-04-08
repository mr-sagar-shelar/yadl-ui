import type { Meta, StoryObj } from "@storybook/react";
import MyDocuments from "../MyDocuments";

const meta: Meta<typeof MyDocuments> = { title: "unDraw/MyDocuments", component: MyDocuments };

export default meta;
type Story = StoryObj<typeof MyDocuments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
