import type { Meta, StoryObj } from "@storybook/react";
import Safe from "../Safe";

const meta: Meta<typeof Safe> = { title: "unDraw/Safe", component: Safe };

export default meta;
type Story = StoryObj<typeof Safe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
