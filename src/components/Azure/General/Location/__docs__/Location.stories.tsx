import type { Meta, StoryObj } from "@storybook/react";
import Location from "../Location";

const meta: Meta<typeof Location> = { title: "Azure/General/Location", component: Location };

export default meta;
type Story = StoryObj<typeof Location>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
