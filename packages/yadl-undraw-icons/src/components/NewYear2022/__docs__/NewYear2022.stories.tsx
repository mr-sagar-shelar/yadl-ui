import type { Meta, StoryObj } from "@storybook/react";
import NewYear2022 from "../NewYear2022";

const meta: Meta<typeof NewYear2022> = { title: "unDraw/NewYear2022", component: NewYear2022 };

export default meta;
type Story = StoryObj<typeof NewYear2022>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
