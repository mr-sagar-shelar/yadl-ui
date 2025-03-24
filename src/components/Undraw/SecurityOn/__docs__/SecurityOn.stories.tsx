import type { Meta, StoryObj } from "@storybook/react";
import SecurityOn from "../SecurityOn";

const meta: Meta<typeof SecurityOn> = { title: "unDraw/SecurityOn", component: SecurityOn };

export default meta;
type Story = StoryObj<typeof SecurityOn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
