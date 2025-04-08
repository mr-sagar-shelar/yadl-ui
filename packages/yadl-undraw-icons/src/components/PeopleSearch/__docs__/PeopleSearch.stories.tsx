import type { Meta, StoryObj } from "@storybook/react";
import PeopleSearch from "../PeopleSearch";

const meta: Meta<typeof PeopleSearch> = { title: "unDraw/PeopleSearch", component: PeopleSearch };

export default meta;
type Story = StoryObj<typeof PeopleSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
