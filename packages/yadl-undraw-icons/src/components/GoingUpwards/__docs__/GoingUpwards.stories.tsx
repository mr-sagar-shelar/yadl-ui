import type { Meta, StoryObj } from "@storybook/react";
import GoingUpwards from "../GoingUpwards";

const meta: Meta<typeof GoingUpwards> = { title: "unDraw/GoingUpwards", component: GoingUpwards };

export default meta;
type Story = StoryObj<typeof GoingUpwards>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
