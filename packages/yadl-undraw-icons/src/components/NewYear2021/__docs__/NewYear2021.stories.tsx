import type { Meta, StoryObj } from "@storybook/react";
import NewYear2021 from "../NewYear2021";

const meta: Meta<typeof NewYear2021> = { title: "unDraw/NewYear2021", component: NewYear2021 };

export default meta;
type Story = StoryObj<typeof NewYear2021>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
