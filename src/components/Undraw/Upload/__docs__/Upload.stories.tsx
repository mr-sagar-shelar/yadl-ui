import type { Meta, StoryObj } from "@storybook/react";
import Upload from "../Upload";

const meta: Meta<typeof Upload> = { title: "unDraw/Upload", component: Upload };

export default meta;
type Story = StoryObj<typeof Upload>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
