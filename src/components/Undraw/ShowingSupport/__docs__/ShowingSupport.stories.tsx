import type { Meta, StoryObj } from "@storybook/react";
import ShowingSupport from "../ShowingSupport";

const meta: Meta<typeof ShowingSupport> = { title: "unDraw/ShowingSupport", component: ShowingSupport };

export default meta;
type Story = StoryObj<typeof ShowingSupport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
