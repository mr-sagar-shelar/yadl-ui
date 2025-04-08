import type { Meta, StoryObj } from "@storybook/react";
import ServerError from "../ServerError";

const meta: Meta<typeof ServerError> = { title: "unDraw/ServerError", component: ServerError };

export default meta;
type Story = StoryObj<typeof ServerError>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
